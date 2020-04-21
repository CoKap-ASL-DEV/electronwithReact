const FS = require("fs");
const PATH = require("path");
const isLeaf = {
  DIRECTORY: false,
  FILE: true,
};

function safeReadDirSync(path) {
  let dirData = {};
  try {
    dirData = FS.readdirSync(path);
  } catch (ex) {
    if (ex.code == "EACCES" || ex.code == "EPERM") {
      //User does not have permissions, ignore directory
      return;
    } else throw ex;
  }
  return dirData;
}

/**
 * Normalizes windows style paths by replacing double backslahes with single forward slahes (unix style).
 * @param  {string} path
 * @return {string}
 */
function normalizePath(path) {
  return path.replace(/\\/g, "/");
}

/**
 * Tests if the supplied parameter is of type RegExp
 * @param  {any}  regExp
 * @return {Boolean}
 */
function isRegExp(regExp) {
  return typeof regExp === "object" && regExp.constructor == RegExp;
}

/**
 * Collects the files and folders for a directory path into an Object, subject
 * to the options supplied, and invoking optional
 * @param  {String} path
 * @param  {Object} options
 
 * @return {Object}
 */

//let keyCount = 0;

function directoryTree(path, options, depth = null, keyCount = 0) {
  const title = PATH.basename(path);
  path = options && options.normalizePath ? normalizePath(path) : path;
  let keyName = depth;
  keyName = keyName + keyCount;
  let key = keyName;

  //let item = { title, key, path };
  let item = { title, key, path };
  let stats;

  try {
    stats = FS.statSync(path);
  } catch (e) {
    return null;
  }

  // Skip if it matches the exclude regex
  if (options && options.exclude) {
    const excludes = isRegExp(options.exclude)
      ? [options.exclude]
      : options.exclude;
    if (excludes.some((exclusion) => exclusion.test(path))) {
      return null;
    }
  }

  if (stats.isFile()) {
    const ext = PATH.extname(path).toLowerCase();

    // Skip if it does not match the extension regex
    if (options && options.extensions && !options.extensions.test(ext))
      return null;

    item.size = stats.size; // File size in bytes
    item.extension = ext;
    item.isLeaf = isLeaf.FILE;
    item.uid = stats.uid; // File size in bytes
    item.key = item.key + "f";

    if (options && options.attributes) {
      options.attributes.forEach((attribute) => {
        item[attribute] = stats[attribute];
      });
    }
  } else if (stats.isDirectory()) {
    let dirData = safeReadDirSync(path);
    if (dirData === null) return null;

    if (options && options.attributes) {
      options.attributes.forEach((attribute) => {
        item[attribute] = stats[attribute];
      });
    }
    keyName = keyName + "_";
    item.children = [];

    for (var i = 0; i < dirData.length; i++) {
      const childItem = directoryTree(
        PATH.join(path, dirData[i]),
        options,
        keyName,
        i + 1
      );
      if (childItem) {
        item.children.push(childItem);
      }
    }

    item.isLeaf = isLeaf.DIRECTORY;
  } else {
    return;
  }
  return item;
}

module.exports = directoryTree;

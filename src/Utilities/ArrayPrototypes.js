//Contact
if (!Array.prototype.customConcat) {
  Array.prototype.customConcat = function (...arrays) {
    const newArray = [...this];
    arrays.forEach((arr) => {
      if (Array.isArray(arr)) {
        newArray.push(...arr);
      } else {
        newArray.push(arr);
      }
    });
    return newArray;
  };
}

//Every
if (!Array.prototype.customEvery) {
  Array.prototype.customEvery = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      if (!callback.call(thisArg, this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
}

//Filter
if (!Array.prototype.customFilter) {
  Array.prototype.customFilter = function (callback, thisArg) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };
}

//Find
if (!Array.prototype.customFind) {
  Array.prototype.customFind = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        return this[i];
      }
    }
    return undefined;
  };
}

//Foreach
if (!Array.prototype.customForEach) {
  Array.prototype.customForEach = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

//Includes
if (!Array.prototype.customIncludes) {
  Array.prototype.customIncludes = function (searchElement, fromIndex) {
    const startIndex = fromIndex || 0;
    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true;
      }
    }
    return false;
  };
}

// IndexOf
if (!Array.prototype.customIndexOf) {
  Array.prototype.customIndexOf = function (searchElement, fromIndex) {
    const startIndex = fromIndex || 0;
    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };
}

// Map
if (!Array.prototype.customMap) {
  Array.prototype.customMap = function (callback, thisArg) {
    const mappedArray = [];
    for (let i = 0; i < this.length; i++) {
      mappedArray.push(callback.call(thisArg, this[i], i, this));
    }
    return mappedArray;
  };
}

//Pop
if (!Array.prototype.customPop) {
  Array.prototype.customPop = function () {
    if (this.length === 0) {
      return undefined;
    }
    const lastElement = this[this.length - 1];
    this.length -= 1;
    return lastElement;
  };
}

// Push
if (!Array.prototype.customPush) {
  Array.prototype.customPush = function (...elements) {
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }
    return this.length;
  };
}

//reduce
if (!Array.prototype.customReduce) {
  Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  };
}

//Shift
if (!Array.prototype.customShift) {
  Array.prototype.customShift = function () {
    if (this.length === 0) {
      return undefined;
    }
    const firstElement = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    this.length -= 1;
    return firstElement;
  };
}

//Slice
if (!Array.prototype.customSlice) {
  Array.prototype.customSlice = function (start, end) {
    const newArray = [];
    const startIndex =
      start < 0
        ? Math.max(this.length + start, 0)
        : Math.min(start, this.length);
    const endIndex =
      end === undefined
        ? this.length
        : end < 0
        ? Math.max(this.length + end, 0)
        : Math.min(end, this.length);
    for (let i = startIndex; i < endIndex; i++) {
      newArray.push(this[i]);
    }
    return newArray;
  };
}

//some
if (!Array.prototype.customSome) {
  Array.prototype.customSome = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
}

//splice
if (!Array.prototype.customSplice) {
  Array.prototype.customSplice = function (start, deleteCount, ...items) {
    const removedElements = [];
    const startIndex =
      start < 0
        ? Math.max(this.length + start, 0)
        : Math.min(start, this.length);
    const count = deleteCount || this.length - startIndex;
    for (let i = startIndex; i < startIndex + count; i++) {
      removedElements.push(this[i]);
    }
    const endArray = this.slice(0, startIndex).concat(
      items,
      this.slice(startIndex + count)
    );
    this.length = 0;
    this.push(...endArray);
    return removedElements;
  };
}

//unshift
if (!Array.prototype.customUnshift) {
  Array.prototype.customUnshift = function (...elements) {
    const newArray = [...elements, ...this];
    for (let i = 0; i < newArray.length; i++) {
      this[i] = newArray[i];
    }
    return this.length;
  };
}

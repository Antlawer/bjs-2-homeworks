function cachingDecoratorNew(func) {
  // Ваш код

  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
      console.log('Из кэша: ' + objectInCache.result);
      return ('Из кэша: ' + objectInCache.result);
    } 

      let result = func(...args);
      cache.push({hash, result});
      if (cache.length > 5) {
        cache.shift();
        console.log('Элемент удален');
      }
      
      console.log('Вычисляем: ' + result);

      return 'Вычисляем: ' + result;
    }
    return wrapper;
  }


function debounceDecoratorNew(func, ms) {
  // Ваш код

  let timerid;
  let value = false;

  function wrapper (...args) {
    clearTimeout(timerid);

    if (!value) {
      func.apply(this, args);
    }

    value = true;

    timerid = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  }
  return wrapper;
}


function debounceDecorator2(func, ms) {
  // Ваш код

  let timerid;
  let value = false;
  let count = 0;

  function wrapper (...args) {
    clearTimeout(timerid);

    if (!value) {
      func.apply(this, args);
      count++;
    }

    value = true;

    timerid = setTimeout(() => {
      func.apply(this, args);
      count++;
    }, ms);

  }
  return wrapper;
}

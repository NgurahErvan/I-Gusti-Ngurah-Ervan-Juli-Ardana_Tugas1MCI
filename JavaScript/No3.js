function dim(arr) {
    if (arr instanceof Array) {
      return [arr.length].concat(dim(arr[0]));
    } else {
      return [];
    }
  }
  
  function argwhere(arr) {
    const shape = dim(arr);
    const result = [];
  
    for (let i = 0; i < shape[0]; i++) {
      for (let j = 0; j < shape[1]; j++) {
        for (let k = 0; k < shape[2]; k++) {
          if (arr[i][j][k] !== 0) {
            result.push([i, j, k]);
          }
        }
      }
    }
  
    return result;
  }
  
  // contoh penggunaan
  const input = [  [    [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [    [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [    [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  ];
  
  const output = argwhere(input);
  console.log(output.join("\n"));
  

function inOrderArray(root) {
  if (!root) return [];
  let res = [];

  res = res.concat(inOrderArray(root.left));
  res.push(root.val);
  res = res.concat(inOrderArray(root.right));

  return res;
}

function postOrderArray(root) {
  if (!root) return [];
  let res = [];

  res = res.concat(postOrderArray(root.left));
  res = res.concat(postOrderArray(root.right));
  res.push(root.val);

  return res;
}


module.exports = {
    inOrderArray,
    postOrderArray
};
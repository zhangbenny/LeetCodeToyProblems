//==========================================================================
//https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
//==========================================================================

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (root.left) {
    root.left.next = root.right;
  }
  if (root.next) {
    root.right.next = root.next.left;
    connect(root.next);
  }
  if (root.left) {
    connect(root.left);
  }
};

function TreeLinkNode(val) {
    this.val = val;
    this.left = this.right = this.next = null;
}

var node00 = new TreeLinkNode(00);
node00.left = new TreeLinkNode(01);
node00.right = new TreeLinkNode(02);
node00.left.left = new TreeLinkNode(03);
node00.left.right = new TreeLinkNode(04);
node00.right.left = new TreeLinkNode(05);
node00.right.right = new TreeLinkNode(06);
node00.left.left.left = new TreeLinkNode(07);
node00.left.left.right = new TreeLinkNode(08);
node00.left.right.left = new TreeLinkNode(09);
node00.left.right.right = new TreeLinkNode(10);
node00.right.left.left = new TreeLinkNode(11);
node00.right.left.right = new TreeLinkNode(12);
node00.right.right.left = new TreeLinkNode(13);
node00.right.rightright = new TreeLinkNode(14);

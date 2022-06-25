// Problem 83: Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates
// such that each element appears only once.
// Return the linked list sorted as well.

var deleteDuplicates = function(head) {

  let curr = head;
     while(curr) {
         while(curr.next && curr.val == curr.next.val) {
               curr.next = curr.next.next
         }
         curr = curr.next;
     }
     return head;
};

// Problem 21: Merge two sorted lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Solution 1: While loop

var mergeTwoLists = function(list1, list2) {
  // Initialise a new LinkedList with a dummy ListNode
  let newList = new ListNode(0);
  // Maintain a reference to the head of the new LinkedList
  let headOfNewList = newList;

  // Whilst both of the passed in lists contain more elements
  while (list1 != null && list2 != null) {
    // If l1's value is smaller
    if (list1.val < list2.val) {
      // Add l1's value to the new list
      newList.next = list1;
      // Move l1 to its next element
      list1 = list1.next;
    } else {
      // Add l2's value to the new list
      newList.next = list2;
      // Move l2 to its next element
      list2 = list2.next;
    }
    // Move into the next level of the LinkedList for the next iteration
    newList = newList.next;
  }

  if (list1 == null) {
    newList.next = list2;
  }

  if (list2 == null) {
    newList.next = list1;
  }

  return headOfNewList.next;
};

// Solution 2: Two pointers

// initiate a hashmap
// step 2: if on the lists ended, transfer the remaining numbers
// from the other list into the result
// step 3: use two pointers to compare values in each list
// step 4: take the smaller value & transfer it to result

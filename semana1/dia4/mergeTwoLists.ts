/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    const newList: ListNode = [...list1, ...list2];

    return newList.sort();
}

const list: number[] = [1, 2, 3];
const list2: number[] = [4, 9, 6, 2];
const list3: number[] = [];
const list4: number[] = [0];

const newList: number[] = [...list4];

console.log(newList.sort());

// nao conseguir estuda ponteiros

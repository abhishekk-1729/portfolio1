import React from 'react'

export default function OrgHierarchy() {
  return (
    <>
      <div className="projectDescription">
            <h1>
                Organization Hierarchy
            </h1>
            <p className="subheading">
                Project Description
            </p>
            <p className='text'>
              Link to the assignment is <a href="https://www.cse.iitd.ac.in/~mausam/courses/col106/spring2021/A2/A2.pdf" target="_blank">Assignment</a>
            </p>
            <p className="text">
            We want to maintain the list of employees in a company. We will be concerned with two
quantities associated with each employee in the company -- ID of the employee (you can assume no two employees in the
company have the same ID), and the level of the employee. The level denotes where the person stands in the hierarchy.
Level 1 denotes the highest post in the company (say the owner), level 2 comes below level 1 and so on. There is only 1
person at level 1, but there can be several employees at level i  1. Each level i employee works under a level i-1 employee,
which is his/her immediate boss. Given an employee A, we can form a sequence of employees A',A'', A''', ... where A works
under A', A' works under A'', and so on. We say that each employee in A',A'', A''',... is a boss of A.
            </p>
            <p className="subheading">
                Data Structures Used
            </p>
            <p className="text">
              AVL Tree: An AVL tree is a self-balancing binary search tree where the heights of the left and right subtrees of every node differ by at most one. The tree employs rotations to maintain balance during insertions and deletions. This balancing ensures the tree remains efficient, with search, insertion, and deletion operations having a logarithmic time complexity, O(log n), where n is the number of nodes. The AVL tree's structure ensures a balanced hierarchy, preventing performance degradation often associated with unbalanced binary search trees.
            </p>
            <p className="text">
              Queue: A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, where elements are added at the rear and removed from the front. This ensures that the oldest element is processed first, making queues useful for scenarios where maintaining the order of oper
            </p>
            <p className="text">
              DeQueue: A deque, short for double-ended queue, is a versatile data structure that allows insertion and deletion of elements from both ends. Combining features of both queues and stacks, a deque supports operations at the front and rear, providing flexibility in various applications, such as managing sliding windows or implementing a stack with efficient access to both ends.
            </p>
            <p className='text'>
              ArrayList: An ArrayList is a dynamic array implementation commonly found in programming languages like Java or C#. It allows for dynamic resizing, eliminating the need for manual memory management. Elements can be accessed using an index, and the list supports dynamic insertion and deletion. While efficient for sequential access, adding or removing elements in the middle of the list may incur higher costs due to the need to shift subsequent elements. The ArrayList offers a balance between dynamic resizing and array-based random access.
            </p>

        </div>
    </>
  )
}

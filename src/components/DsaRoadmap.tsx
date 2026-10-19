"use client"
import { useState } from "react";
import Link from "next/link";

const phases = [
  {
    title: "Phase 1: Foundations",
    description: "Build your programming and problem-solving fundamentals.",
    topics: [
      {
        title: "01. C++ Basics and Complexity",
        subtopics: [
          "Input/Output, loops and functions",
          "Pointers and references",
          "STL: vector, pair and string",
          "Time and space complexity (Big-O)",
        ],
        questions: [
          "Reverse a Number",
          "Palindrome Check",
          "Prime Check and Sieve of Eratosthenes",
          "GCD and LCM",
          "Fibonacci",
        ],
      },
      {
        title: "02. Arrays and Strings",
        subtopics: [
          "Array traversal and prefix sum",
          "Two pointers and sliding window",
          "Kadane's algorithm",
        ],
        questions: [
          "Two Sum",
          "Move Zeroes",
          "Maximum Subarray",
          "Best Time to Buy and Sell Stock",
          "Rotate Array",
          "Product of Array Except Self",
          "Valid Anagram",
          "Longest Substring Without Repeating Characters",
        ],
      },
      {
        title: "03. Searching and Sorting",
        subtopics: [
          "Linear and binary search",
          "Bubble, selection and insertion sort",
          "Merge sort and quick sort",
          "std::sort and custom comparators",
          "Binary search on answer",
        ],
        questions: [
          "Binary Search",
          "First and Last Position in Sorted Array",
          "Search in Rotated Sorted Array",
          "Sqrt(x)",
          "Merge Sorted Array",
          "Koko Eating Bananas",
        ],
      },
      {
        title: "04. Recursion and Backtracking",
        subtopics: [
          "Base cases and recursion trees",
          "Subsets and permutations",
          "Pruning and backtracking",
        ],
        questions: [
          "Power(x, n)",
          "Subsets",
          "Permutations",
          "Combination Sum",
          "N-Queens",
          "Word Search",
        ],
      },
    ],
  },
  {
    title: "Phase 2: Core Data Structures",
    description: "Master the data structures used in coding interviews.",
    topics: [
      {
        title: "05. Hashing",
        subtopics: [
          "unordered_map and unordered_set",
          "map and set",
          "Frequency counting",
          "Prefix-sum hashing",
        ],
        questions: [
          "Group Anagrams",
          "Longest Consecutive Sequence",
          "Subarray Sum Equals K",
          "Top K Frequent Elements",
          "Contains Duplicate",
        ],
      },
      {
        title: "06. Linked List",
        subtopics: [
          "Singly, doubly and circular linked lists",
          "Fast and slow pointers",
          "Reversal and dummy nodes",
        ],
        questions: [
          "Reverse Linked List",
          "Middle of the List",
          "Detect Cycle and Find Its Start",
          "Merge Two Sorted Lists",
          "Remove Nth Node From End",
          "Palindrome Linked List",
          "LRU Cache",
        ],
      },
      {
        title: "07. Stack and Queue",
        subtopics: [
          "Stack, queue and deque",
          "Monotonic stack",
          "Monotonic queue",
        ],
        questions: [
          "Valid Parentheses",
          "Min Stack",
          "Next Greater Element",
          "Daily Temperatures",
          "Queue Using Stacks",
          "Sliding Window Maximum",
          "Largest Rectangle in Histogram",
        ],
      },
      {
        title: "08. Trees",
        subtopics: [
          "Binary trees and BST",
          "DFS: inorder, preorder and postorder",
          "Level-order traversal (BFS)",
          "Height, diameter and LCA",
        ],
        questions: [
          "Maximum Depth",
          "Invert Binary Tree",
          "Level Order Traversal",
          "Validate BST",
          "Diameter of Binary Tree",
          "Lowest Common Ancestor",
          "Kth Smallest in BST",
          "Serialize and Deserialize Binary Tree",
        ],
      },
      {
        title: "09. Heap / Priority Queue",
        subtopics: [
          "Min heap and max heap",
          "Heapify",
          "Top-K problem pattern",
        ],
        questions: [
          "Kth Largest Element",
          "Top K Frequent Elements",
          "Merge K Sorted Lists",
          "Task Scheduler",
          "Find Median from Data Stream",
        ],
      },
    ],
  },
  {
    title: "Phase 3: Advanced Topics",
    description: "Learn advanced algorithms and solve challenging problems.",
    topics: [
      {
        title: "10. Graphs",
        subtopics: [
          "Adjacency list and matrix",
          "BFS and DFS",
          "Topological sort",
          "Dijkstra's algorithm",
          "Union-Find (DSU)",
          "Minimum spanning tree: Kruskal and Prim",
          "Cycle detection",
        ],
        questions: [
          "Number of Islands",
          "Clone Graph",
          "Rotting Oranges",
          "Course Schedule I and II",
          "Number of Provinces",
          "Word Ladder",
          "Network Delay Time",
          "Cheapest Flights Within K Stops",
        ],
      },
      {
        title: "11. Dynamic Programming",
        subtopics: [
          "Memoization vs tabulation",
          "1D and 2D/grid DP",
          "Knapsack patterns",
          "LIS and LCS",
          "Space optimization",
        ],
        questions: [
          "Climbing Stairs",
          "House Robber",
          "Coin Change",
          "Unique Paths",
          "0/1 Knapsack",
          "Partition Equal Subset Sum",
          "Longest Increasing Subsequence",
          "Longest Common Subsequence",
          "Edit Distance",
        ],
      },
      {
        title: "12. Greedy",
        subtopics: [
          "Interval problems",
          "Sorting and greedy choices",
          "Exchange argument",
        ],
        questions: [
          "Activity Selection",
          "Jump Game I and II",
          "Gas Station",
          "Merge Intervals",
          "Non-overlapping Intervals",
          "Meeting Rooms II",
        ],
      },
      {
        title: "13. Bit Manipulation and Tries (Bonus)",
        subtopics: [
          "AND, OR and XOR",
          "Bit shifts and masks",
          "Trie insertion, search and prefix",
        ],
        questions: [
          "Single Number",
          "Number of 1 Bits",
          "Power of Two",
          "Counting Bits",
          "Implement Trie",
          "Word Search II",
        ],
      },
    ],
  },
];

export default function DsaRoadmap() {
   const [openTopic, setOpenTopic] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/students/roadmaps"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 no-underline shadow-sm transition hover:bg-blue-50 hover:text-blue-700"
        >
          ← Back to Roadmaps
        </Link>

        <header className="py-10">
          <p className="text-sm font-extrabold uppercase tracking-[3px] text-blue-600">
            Complete Learning Path
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
            DSA Roadmap in C++
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Master data structures and algorithms step by step, from
            programming fundamentals to advanced coding interview problems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-800">
              3 Phases
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              13 Topics
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              C++ Practice
            </span>
          </div>
        </header>

        <div className="space-y-12">
          {phases.map((phase) => (
            <section key={phase.title}>
              <div className="mb-5 border-l-4 border-blue-600 pl-4">
                <h2 className="text-xl font-extrabold sm:text-2xl">
                  {phase.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {phase.description}
                </p>
              </div>

              <div className="space-y-4">
                {phase.topics.map((topic) => (
                  <article
                    key={topic.title}
                    className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:border-blue-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-4 p-5">
                      <h3 className="font-bold leading-6 text-slate-800 transition-colors group-hover:text-blue-700 sm:text-lg">
                        {topic.title}
                      </h3>
                      <button
  type="button"
  onClick={() =>
    setOpenTopic(
      openTopic === topic.title ? null : topic.title
    )
  }
  className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 hover:bg-blue-100"
>
  {openTopic === topic.title ? "Hide Topics −" : "View Topics +"}
</button>
                    </div>

                   <div
  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
    openTopic === topic.title ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
  }`}
>
                      <div className="overflow-hidden">
                        <div
  className={`overflow-hidden border-t border-slate-100 px-5 pb-6 pt-5 transition-opacity duration-300 ${
    openTopic === topic.title ? "opacity-100" : "opacity-0"
  }`}
>
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-700">
                                Sub-topics
                              </h4>
                              <ul className="space-y-2">
                                {topic.subtopics.map((subtopic) => (
                                  <li
                                    key={subtopic}
                                    className="flex gap-2 text-sm leading-6 text-slate-600"
                                  >
                                    <span className="text-blue-600">•</span>
                                    {subtopic}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-slate-700">
                                Practice Questions
                              </h4>
                              <ul className="space-y-2">
                                {topic.questions.map((question) => (
                                  <li
                                    key={question}
                                    className="flex gap-2 text-sm leading-6 text-slate-600"
                                  >
                                    <span className="text-emerald-600">✓</span>
                                    {question}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

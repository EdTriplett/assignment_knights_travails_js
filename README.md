# assignment_knights_travails_js
Do not go gentle into that good knight.

Bennie and Ed

What data structure is used to implement DFS?
graph/tree

What data structure is typically used to implement BFS?
also a graph/tree

Which one can be done recursively? (the clue should be the data structure)
DFS

Which one would you use to print a list of all the nodes in a tree or graph, starting with depth 1, then depth 2, then depth 3 etc.?
BFS

What is the difference between a tree and a graph?
Trees are a subset of graphs in which nodes are hierarchically ordered (parents and children)


Psuedocode:

Searching a simple tree of nodes where each Node has an array of child nodes (someNode.children) using DFS.

-push root onto stack
while (stack.length) {
-Pop the current node off the stack.
-Examine the current node for a match
-If match, return current Node
-If no match, push all its children on the stack, with 'best' option last and worst first
}
-If (!stack.length), return 'search failed'


Searching the same tree using BFS.
-push root onto queue
while (queue.length) {
  pop next node off queue
  examine it for a match
  if match, return node
  if not, push all its children on queue
}
-if (!queue.length) return 'search failed'

for all children, if their distance < currentNode.distance, do not enqueue






















dfsGraph (value, currentNode=root) {
  if (!currentNode.distance) {let currentNode.distance = 0}
  //check current node's value
  // if match, return current node
  if (currentNode.value = value) return currentNode
  adjList[currentNode].forEach(edge=>{
  // assuming edges have shape [to_node, weight]
  if (edge[0].distance && edge[0].distance < currentNode.distance) return
  if (!edge[0].distance) {
    edge[0].distance = currentVertex.distance + 1
  }
  stack.push(edge[0]) 
} )
}
/*
set firstVertex.distance = 0
-push first vertex onto stack
while (stack.length) {
-Pop the current vertex off the stack.
-Examine the current node for a match
-If match, return current Node
-If no match, 
  -for each child
    -If no child.distance, set child.distance to currentVertex.distance + 1
  -if child.distance < currentVertex.distance, push the child onto the stack
}
-If (!stack.length), return 'search failed'


*/
class Graph {
  constructor() {
    // Code goes here ...
    this.adjList = new Object();
  }

  addVertex(vertex) {
    // Code goes here ...
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Array();
    }
  }
  //creating path between two nodes
  addEdges(srcValue, destValue) {
    //addVertex
    this.addVertex(srcValue);
    //addVertex
    this.addVertex(destValue)

    //creating variable names and assigning to new value, which is an []
    let srcVertex = this.adjList[srcValue]  //[]
    let destVertex = this.adjList[destValue]  //[]

    srcVertex.push(destValue)
    destVertex.push(srcValue)
    // console.log("srcVertex array", srcVertex);
  }

  buildGraph(edges) {

    for (let index = 0; index < edges.length; index++) {
      const element = edges[index];
      this.addEdges(element[0], element[1])
    }
    // console.log("after: ", this.adjList)

    return this.adjList

  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
    let visited = new Set();
    let queue = [startingVertex];

    while (queue.length) {
      let current = queue.shift(); //remove first element and assign it to current
      if (visited.has(current)) {
        continue;
      }

      visited.add(current)
      queue.push(...this.adjList[current])
    }

    return Array.from(visited)
  }

  depthFirstTraversalIterative(startingVertex) {
    let visited = new Set()
    let queue = [startingVertex]

    while (queue.length) {
      let current = queue.pop()
      if (visited.has(current)) {
        continue;
      }

      visited.add(current)

      queue.push(...this.adjList[current])
    }

    return Array.from(visited)

  }

  depthFirstTraversalRecursive(node, visited = new Set()) {

    //base case => does visiting have a starting index
    if (visited.has(node)) return

    visited.add(node);

    this.adjList[node].forEach((neighbor) => {
      this.depthFirstTraversalRecursive(neighbor, visited)
    })
    return Array.from(visited)
  }
}
module.exports = {
  Graph
};

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
  //path between two nodes
  addEdges(srcValue, destValue) {
    if(!srcValue in this.adjList) {
      this.addVertex(srcValue)
    }

    if(!destValue in this.adjList) {
      this.addVertex(destValue)
    }

    let srcVertex = this.adjList[srcValue]
    let destVertex = this.adjList[destValue]

    srcVertex.push(destVertex)
    destVertex.push(srcVertex)
  }

  buildGraph(edges) {
    // Code goes here ...
  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};

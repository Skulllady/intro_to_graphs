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

  buildGraph() {
    // Code goes here ...
    console.log("Object:", this.adjList)
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

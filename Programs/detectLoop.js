function detectLoop(head) {
  let current = head;
  const visitedNodes = new Set(); // Using a hash map (Set) to store visited nodes

  while (current) {
    if (visitedNodes.has(current)) {
      // If the current node is already in the hash map, there's a loop
      return true;
    }

    visitedNodes.add(current); // Add the current node to the hash map
    current = current.next; // Move to the next node
  }

  return false; // If we reach the end of the list, there's no loop
}

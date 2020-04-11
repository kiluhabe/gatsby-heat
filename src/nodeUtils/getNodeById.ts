interface Node {
    id: string
}

interface Edge<T extends Node> {
    node: T
}

export function getNodeById<T extends Node>(edges: Edge<T>[], id: string): T {
    const { node } = edges.find(edge => edge.node.id === id) ?? {}
    if (!node) {
        throw new Error()
    }
    return node
}

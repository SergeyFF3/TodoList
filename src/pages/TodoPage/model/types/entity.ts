export interface EntityProps {
    id?: string
    rowName?: string
}

export interface EntitySchema {
    data?: EntityProps
    error?: string
    isLoading?: boolean
}
export interface TodoProps {
    child?: [ null ],
    equipmentCosts?: number
    estimatedProfit?: number
    id?: number
    machineOperatorSalary?: number
    mainCosts?: number
    materials?: number
    mimExploitation?: number
    overheads?: number
    rowName?: string
    salary?: number
    supportCosts?: number
    total?: number
}

export interface TodoSchema {
    data?: TodoProps[]
    isLoading?: boolean
    error?: string
}
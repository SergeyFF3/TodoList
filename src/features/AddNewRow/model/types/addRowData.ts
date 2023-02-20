export interface NewRowProps {
    rowName?: string
    salary?: number | string
    equipmentCosts?: number
    overheads?: number
    estimatedProfit?: number
    machineOperatorSalary: number
    mainCosts: number
    materials: number
    mimExploitation: number
    parentId: number
    supportCosts: number
}

export interface rowSchema {
    data: NewRowProps
}
export interface ITransaction {
  transactionDate: string
  clientName: string
  description: string
  amount: number
  fileUrl: string
  fileName: string
  uploadedDate: string
}
export interface IResponse {
  transactions: ITransaction[];
  pageNumber:number,
  pageSize: number,
  firstPage: number,
  lastPage: number,
  totalPages: number
}


export interface ITransactionSummary {
  totalClients:number
  totalTransactions: number
  totalAmount: number
  fileCount: number
}

import { ExpenseFormData } from '@/app/components/organisms/addExpense/addExpenseSchema'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ExpenseFormData[] = []
const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.push({
                date: action.payload.date,
                amount: action.payload.amount,
                category: action.payload.category,
                title: action.payload.title
            })
        },
    },
})

export const { addExpense } = expenseSlice.actions
export default expenseSlice.reducer
import z from "zod";

export const expenseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  amount: z
    .number({message:'Amount must be a number'})
    .positive("Amount must be greater than 0"),
  category: z.string().min(1, "Category is required"),
  date: z.string().min(1, "Date is required"),
});

export type ExpenseFormData = z.infer<typeof expenseSchema>;

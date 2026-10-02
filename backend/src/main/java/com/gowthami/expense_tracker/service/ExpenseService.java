package com.gowthami.expense_tracker.service;

import com.gowthami.expense_tracker.entity.Expense;
import com.gowthami.expense_tracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    public Expense addExpense(Expense expense) {
        return repository.save(expense);
    }

    public List<Expense> getAllExpenses() {
        return repository.findAll();
    }

    public Expense getExpenseById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Expense updateExpense(Long id, Expense updatedExpense) {

        Expense existingExpense = repository.findById(id).orElse(null);

        if (existingExpense == null) {
            return null;
        }

        existingExpense.setDescription(updatedExpense.getDescription());
        existingExpense.setCategory(updatedExpense.getCategory());
        existingExpense.setAmount(updatedExpense.getAmount());

        return repository.save(existingExpense);
    }

    public void deleteExpense(Long id) {
        repository.deleteById(id);
    }

    public double getTotalExpense() {

        List<Expense> expenses = repository.findAll();

        double total = 0;

        for (Expense expense : expenses) {
            total += expense.getAmount();
        }

        return total;
    }
}
package com.tsb.bank.controller;

import com.tsb.bank.model.Transaction;
import com.tsb.bank.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<Transaction> findAll() {
        return transactionService.findAll();
    }

    @PostMapping
    public Transaction save(@RequestBody Transaction transaction) {
        return transactionService.save(transaction);
    }
}

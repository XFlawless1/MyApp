// main_test.go
package main

import "testing"

func TestAdd(t *testing.T) {
    result := add(5, 10)
    if result != 15 {
        t.Errorf("Expected sum of 5 and 10 to be 15, but got %d", result)
    }

    result = add(0, 0)
    if result != 0 {
        t.Errorf("Expected sum of 0 and 0 to be 0, but got %d", result)
    }

    result = add(10, 0)
    if result != 10 {
        t.Errorf("Expected sum of 10 and 0 to be 0, but got %d", result)
    }
    result = add(-5, -10)
    if result != -15 {
        t.Errorf("Expected sum of -5 and -10 to be -15, but got %d", result)
    }

    result = add(100, 200)
    if result != 300 {
        t.Errorf("Expected sum of 100 and 200 to be 300, but got %d", result)
    }
}
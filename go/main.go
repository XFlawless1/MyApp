// main.go
package main

import "fmt"

func main() {
    num1 := 5
    num2 := 10
    sum := add(num1, num2)
    fmt.Printf("The sum of %d and %d is: %d\n", num1, num2, sum)
}

func add(a, b int) int {
    return a + b
}
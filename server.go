package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./views")))
	fmt.Println("Server starting at http://localhost:3000/")
	log.Fatal(http.ListenAndServe(":3000", nil))
}

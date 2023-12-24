package helper

import (
	"fmt"
	"strings"
)

type UserData struct {
	FirstName       string
	LastName        string
	Email           string
	NumberOfTickets string
}

func GreetUsers(conferenceName string, conferenceTickets uint, remainingTickets uint) {
	fmt.Printf("Welcome to %v booking application\n", conferenceName)
	fmt.Printf("We have total of %v tickets and %v are still available.\n", conferenceTickets, remainingTickets)
	fmt.Println("Get your tickets here to attend")
}

func GetUserInput(firstName string, lastName string, email string, userTickets uint) (string, string, string, uint) {
	fmt.Print("Enter your first name: ")
	fmt.Scan(&firstName)

	fmt.Print("Enter your last name: ")
	fmt.Scan(&lastName)

	fmt.Print("Enter your email: ")
	fmt.Scan(&email)

	fmt.Print("Enter number of tickets: ")
	fmt.Scan(&userTickets)

	return firstName, lastName, email, userTickets
}

func ValidateUserInput(firstName string, lastName string, email string, userTickets uint, remainingTickets uint) bool {
	isValidName := len(firstName) >= 2 && len(lastName) >= 2
	isValidEmail := strings.Contains(email, "@") && strings.Contains(email, ".")
	isValidTicketNumber := userTickets > 0 && userTickets <= remainingTickets

	if !isValidName {
		fmt.Println("Please input valid first and last names. The minimum acceptable length of each name is 2")
	}
	if !isValidEmail {
		fmt.Println("Please input a valid email address. Email addresses must contain the characters '@' and '.'")
	}
	if !isValidTicketNumber {
		fmt.Printf("We only have %v tickets remaining, so you can't book %v tickets\n", remainingTickets, userTickets)
		fmt.Println("Please try again.")
	}

	return isValidName && isValidEmail && isValidTicketNumber
}

func PrintBookingInfo(bookings []UserData) {
	fmt.Printf("\nThe whole array: %v\n", bookings)
	fmt.Printf("The first value: %v\n", bookings[0])
	fmt.Printf("Map Type: %T\n", bookings)
	fmt.Printf("Map length: %v\n", len(bookings))
}

func PrintResponseToUser(firstName string, lastName string, email string, conferenceName string, userTickets uint, remainingTickets uint) {
	fmt.Printf("\nThank you %v %v for booking %v tickets. You will receive a confirmation email at %v\n", firstName, lastName, userTickets, email)
	fmt.Printf("%v tickets remaining for %v\n\n", remainingTickets, conferenceName)
}

func PrintFirstNames(bookings []UserData) {
	firstNames := []string{}
	for _, booking := range bookings {
		firstNames = append(firstNames, booking.FirstName)
	}
	fmt.Printf("The first names of bookings are: %v\n", firstNames)
}

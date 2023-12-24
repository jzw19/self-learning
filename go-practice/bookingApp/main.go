package main

import (
	"booking-app/helper"
	"fmt"
	"strconv"
	"sync"
	"time"
)

var wg = sync.WaitGroup{}

func main() {
	conferenceName := "Go Conference"
	const conferenceTickets uint = 50
	var remainingTickets uint = 50
	bookings := make([]helper.UserData, 0)

	// fmt.Printf("conferenceTickets is %T, remainingTickets is %T, conferenceName is %T\n", conferenceTickets, remainingTickets, conferenceName)

	helper.GreetUsers(conferenceName, conferenceTickets, remainingTickets)

	for {
		var firstName string
		var lastName string
		var email string
		var userTickets uint

		// ask user for their name
		firstName, lastName, email, userTickets = helper.GetUserInput(firstName, lastName, email, userTickets)
		// fmt.Printf("\n\nfirstName: %v\nlastName: %v\nemail: %v\nuserTickets: %v\n\n\n", firstName, lastName, email, userTickets)

		isUserInputValid := helper.ValidateUserInput(firstName, lastName, email, userTickets, remainingTickets)
		if !isUserInputValid {
			continue
		}

		wg.Add(1)
		go sendTicket(userTickets, firstName, lastName, email)

		var userData = helper.UserData{
			FirstName:       firstName,
			LastName:        lastName,
			Email:           email,
			NumberOfTickets: strconv.FormatUint(uint64(userTickets), 10),
		}

		remainingTickets = remainingTickets - userTickets
		// bookings = append(bookings, firstName+" "+lastName)
		bookings = append(bookings, userData)

		helper.PrintBookingInfo(bookings)
		helper.PrintResponseToUser(firstName, lastName, email, conferenceName, userTickets, remainingTickets)
		helper.PrintFirstNames(bookings)

		if remainingTickets == 0 {
			fmt.Println("Our conference is booked out. Come back next year.")
			break
		}
	}

	wg.Wait()
}

func sendTicket(userTickets uint, firstName string, lastName string, email string) {
	time.Sleep(5 * time.Second)
	var ticket = fmt.Sprintf("%v tickets for %v %v", userTickets, firstName, lastName)
	fmt.Println("\n####################")
	fmt.Printf("Sending ticket(s)...\n%v \nsent to email address %v\n", ticket, email)
	fmt.Println("####################")
	wg.Done()
}

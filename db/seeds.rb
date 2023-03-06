User.destroy_all
Reply.destroy_all
Thread.destroy_all

puts "Creating users"
user1 = User.create(user_name: "mike123", first_name: "Mike", last_name: "Plisco", email: "mike123@mike.com", password: "mike123", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", bio: "This is a bio about User 1")

user2 = User.create(user_name: "chase123", first_name: "Chase", last_name: "Kim", email: "josh123@josh.com", password: "josh123", image: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80", bio: "This is a bio about User 2")

user3= User.create(user_name: "ron123", first_name: "Liza", last_name: "McLain", email: "liza123@liza.com", password: "liza123", image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: "This is a bio about User 3")

user4 = User.create(user_name: "rachel123", first_name: "Wendy", last_name: "Yeung", email: "wendy123@wendy.com", password: "wendy123", image: "https://images.unsplash.com/photo-1556908247-45afb446ed86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: "This is a bio about User 4")

user5 = User.create(user_name: "alex123", first_name: "Alex", last_name: "Smith", email: "alex123@malex.com", password: "alex123", image: "https://images.unsplash.com/photo-1519713880332-91cfe19a59dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: "This is a bio about User 5")

puts "Done creating users"

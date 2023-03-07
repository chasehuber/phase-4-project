User.destroy_all
Reply.destroy_all
Post.destroy_all

puts "🌱 Planting seeds..."

user1 = User.create(user_name: "mike123", first_name: "Mike", last_name: "Plisco", email: "mike123@mike.com", password: "mike123", bio: "This is a bio about User 1")

user2 = User.create(user_name: "chase123", first_name: "Chase", last_name: "Kim", email: "josh123@josh.com", password: "josh123", bio: "This is a bio about User 2")

user3 = User.create(user_name: "ron123", first_name: "Liza", last_name: "McLain", email: "liza123@liza.com", password: "liza123", bio: "This is a bio about User 3")

user4 = User.create(user_name: "rachel123", first_name: "Wendy", last_name: "Yeung", email: "wendy123@wendy.com", password: "wendy123", bio: "This is a bio about User 4")

user5 = User.create(user_name: "alex123", first_name: "Alex", last_name: "Smith", email: "alex123@malex.com", password: "alex123", bio: "This is a bio about User 5")



20.times do
    Post.create(title: Faker::Hobby.activity, body: Faker::Lorem.question, tags: Faker::ProgrammingLanguage.name, creator_id: User.all.sample.id)
end

40.times do
    Reply.create(content: Faker::Lorem.paragraphs, user_id: User.all.sample.id, post_id: Post.all.sample.id)
end

puts "✅ Done seeding!"
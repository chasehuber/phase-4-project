User.destroy_all
Reply.destroy_all
Post.destroy_all

puts "🌱 Planting seeds..."

user1 = User.create(user_name: "mike123", first_name: "Mike", last_name: "Plisco", email: "mike123@mike.com", password: "mike123", bio: "This is a bio about User 1")

user2 = User.create(user_name: "chase123", first_name: "Chase", last_name: "Kim", email: "chase123@josh.com", password: "chase123", bio: "This is a bio about User 2")

user3 = User.create(user_name: "ron123", first_name: "Ronald", last_name: "Posthuauer", email: "ron123@ron.com", password: "ron123", bio: "This is a bio about User 3")

user4 = User.create(user_name: "rachel123", first_name: "Rachel", last_name: "Jung", email: "rachel123@rachel.com", password: "rachel123", bio: "This is a bio about User 4")

user5 = User.create(user_name: "alex123", first_name: "Alex", last_name: "Smith", email: "alex123@malex.com", password: "alex123", bio: "This is a bio about User 5")



20.times do
    user_id = User.all.sample.id
    post = Post.create(title: Faker::Creature::Dog.meme_phrase, body: Faker::Lorem.question, breed: Faker::Creature::Dog.breed, creator_id: user_id)
    CreatorPost.create(user_id: user_id, post_id: post.id)
end

40.times do
    Reply.create(content: Faker::Lorem.paragraph, user_id: User.all.sample.id, post_id: Post.all.sample.id)
end


puts "✅ Done seeding!"

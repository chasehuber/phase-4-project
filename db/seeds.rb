User.destroy_all
Reply.destroy_all
Post.destroy_all

puts "🌱 Planting seeds..."

user1 = User.create(user_name: "mike123", first_name: "Mike", last_name: "Plisco", email: "mike123@mike.com", password: "mike123", bio: "This is a bio about User 1")

user2 = User.create(user_name: "chase123", first_name: "Chase", last_name: "Kim", email: "chase123@josh.com", password: "chase123", bio: "This is a bio about User 2")

user3 = User.create(user_name: "ron123", first_name: "Ronald", last_name: "Posthuauer", email: "ron123@ron.com", password: "ron123", bio: "This is a bio about User 3")

user4 = User.create(user_name: "rachel123", first_name: "Rachel", last_name: "Jung", email: "rachel123@rachel.com", password: "rachel123", bio: "This is a bio about User 4")

user5 = User.create(user_name: "alex123", first_name: "Alex", last_name: "Smith", email: "alex123@malex.com", password: "alex123", bio: "This is a bio about User 5")



post1 =  (user_id = User.all.sample.id 
    post = Post.create(title: "Which dog should I get?", body: "I am a first-time dog owner and I am trying to figure out which breed would be a good fit for me. I live in a small apartment and work long hours, but I am committed to giving my dog plenty of exercise and attention when I am home. I am looking for a dog that is friendly, easy to train, and good with children, as I have young nieces and nephews who will be visiting often. Any suggestions for breeds that might be a good match for my lifestyle and preferences?", breed: "Dog Breeds", creator_id: user_id)
    CreatorPost.create(user_id: user_id, post_id: post.id)) 

post2 = (user_id = User.all.sample.id 
    post = Post.create(title: "How to introduce my new puppy to home?", body: "I just brought home a new puppy and I want to make sure he feels comfortable and safe in his new surroundings. I have a two-year-old dog at home who is friendly but can be a bit territorial, and I'm not sure how to introduce the two dogs to each other. I also want to make sure my new puppy is house trained and knows the rules of the house. Any advice on how to properly introduce my new puppy to my home and my existing dog, and how to get him settled in and comfortable?", breed: "Tips and Tricks", creator_id: user_id) 
    CreatorPost.create(user_id: user_id, post_id: post.id))


post3 = (user_id = User.all.sample.id
    post = Post.create(title: "How to keep my dog active?", body: "My dog is becoming increasingly sedentary and I want to find ways to keep him active and engaged. He is a senior dog with some mobility issues, so I can't take him on long walks or runs like I used to. I'm looking for suggestions on indoor activities or low-impact exercises that I can do with him to help him stay active and healthy. Any ideas for toys, games, or exercises that would be appropriate for an older dog with mobility issues?", breed: "Training and Behavior", creator_id: user_id)
    CreatorPost.create(user_id: user_id, post_id: post.id)
)

post4 = (user_id = User.all.sample.id
    post = Post.create(title: "What are some foods to avoid giving?", body: "I love spoiling my dog with treats and human food, but I'm worried I might be feeding him things that are harmful to his health. I've heard that some human foods can be toxic or cause digestive issues for dogs. Can you give me a list of foods that I should avoid feeding my dog, and explain why they are harmful?", breed: "Health and Wellness", creator_id: user_id)
    CreatorPost.create(user_id: user_id, post_id: post.id)
)


post5 = ( user_id = User.all.sample.id
    post = Post.create(title: "How can I foster or adopt a dog?", body: "I'm interested in fostering or adopting a dog, but I'm not sure where to start. I've never owned a dog before, so I'm looking for guidance on what the process involves and what to expect. Are there any local shelters or rescue organizations you would recommend? How do I go about finding the right dog for me and my lifestyle? What should I consider before making a commitment to foster or adopt a dog?", breed: "Adoption and Rescue", creator_id: user_id)
    CreatorPost.create(user_id: user_id, post_id: post.id)
)


post6 = (user_id = User.all.sample.id
    post = Post.create(title: "How often should I brush my dog's teeth?", body: "I want to make sure my dog's teeth and gums are healthy, but I'm not sure how often I should be brushing his teeth. He's a small dog and I worry that brushing too often might be too stressful for him. Can you give me some guidance on how often I should brush his teeth, and what kind of toothbrush and toothpaste I should use? Are there any other steps I can take to keep his teeth and gums healthy?", breed: "Grooming and Hygiene", creator_id: user_id)
    CreatorPost.create(user_id: user_id, post_id: post.id)
)



post7 = (user_id = User.all.sample.id
    post = Post.create(title: "Recommendations on dog-friendly restaurants in NYC?", body:"I love taking my dog with me when I go out to eat, but it's hard to find restaurants that allow dogs. Can you recommend any dog-friendly restaurants in the area? What should I look for in a dog-friendly restaurant, and how can I ensure that my dog behaves well while we're there? Are there any rules or guidelines I should follow when bringing my dog to a restaurant?", breed: "Dog-friendly Places and Events", creator_id: user_id)
    CreatorPost.create(user_id: user_id, post_id: post.id)
)


20.times do 
    Reply.create(content: Faker::ChuckNorris.fact, user_id: User.all.sample.id, post_id: Post.all.sample.id)
end


puts "✅ Done seeding!"

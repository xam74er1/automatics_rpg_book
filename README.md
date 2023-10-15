# automatics_rpg_book
Generate a books from the rpg adventure

# Story generation 

I use llama2 to create a story :
- I give in input a description of the story 
- I split the story in several parts
- For each part I ask to generate a caption and a description (via llama_2_7b)
- The ouput is a json
- I use the ouput to Generate the image (via stable difution XL)
- I group ecrition in this small webstie 

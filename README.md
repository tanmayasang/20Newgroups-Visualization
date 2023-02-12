# 20Newgroups-Visualization
Visualized the 20 Newsgroups dataset and drew inferences using D3.js and Python
  
The visualization has the following capabilities:
Displays a bar chart with the top K words in the document collection
Enables the user to filter the documents based on topic, and display a bar chart with the frequency of the top K words from that topic.
Export the documents from the selected news topic back to python (as a list of strings).
The API should have two functions:
       plot_top_words(documents, K) # plot top K words using D3 and Javascript
       get_exported_documents() # get the exported documents back to python
       
       
  Below image shows dropdown list of topics
  
<img width="1143" alt="Screen Shot 2023-02-12 at 3 37 11 PM" src="https://user-images.githubusercontent.com/38836635/218336100-2ef638bf-eef1-428d-bff6-e780d2b855ae.png">


Bar chart of k most used words for the selected topic

<img width="614" alt="Screen Shot 2023-02-12 at 3 33 38 PM" src="https://user-images.githubusercontent.com/38836635/218336104-d27e0beb-95c9-46a8-a554-eb09b6115ec3.png">

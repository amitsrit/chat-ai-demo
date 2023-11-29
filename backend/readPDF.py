import PyPDF2
from openai import OpenAIApi

# creating a pdf reader object
reader = PyPDF2.PdfReader('TestAmit.pdf')

# print the text of the first page
print(reader.pages[0].extract_text())



client = OpenAI(organization="org-TntsXAd0CauNOJMkOlFrXpKR",
          apiKey="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",)

response = client.embeddings.create(
  model="text-embedding-ada-002",
  input="The food was delicious and the waiter...",
  encoding_format="float"
)

console.log(response.data.data[0].embedding)

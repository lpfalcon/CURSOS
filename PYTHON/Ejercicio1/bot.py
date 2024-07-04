import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

df = pd.read_csv('bd.csv')
# print(df.head())

dataRelativesWords = df['palabrasRelacionadas'].tolist()


# print(dataRelativesWords)

text = input("Ingresa tu pregunta: ")


vector = TfidfVectorizer()
tfidfMatrix = vector.fit_transform(dataRelativesWords + [text])

cosineSimilarity = cosine_similarity(tfidfMatrix[-1], tfidfMatrix[:-1]).flatten()

df["similitud"] = cosineSimilarity

# print(df.head())

df = df.sort_values(by="similitud", ascending=False)

print(df[['pregunta', 'respuesta', 'similitud']][:1])

# print(df[['pregunta', 'respuesta', 'similitud']][:5])
# print(f"Posible Pregunta: {df['pregunta'][0]} \nRespuesta: {df['respuesta'][0]}\nSimilitud: {df['similitud'][0]}")
from crewai import Agent
from textwrap import dedent
from dotenv import load_dotenv
from langchain_groq import ChatGroq
import os

load_dotenv()
# This is an example of how to define custom agents.
# You can define as many agents as you want.
# You can also define custom tasks in tasks.py
class SIAgents:
    def __init__(self):
        # GRQ_API_KEY = None
        # try:
        #     GRQ_API_KEY = os.environ['GROQ_API_KEY']
        # except KeyError:
        #     print("GROQ Environment variables not set!") 
        self.llm70b = ChatGroq(
            api_key= os.getenv('GROQ_API_KEY'),
            model='llama3-70b-8192'
        )

    def answerer(self):
        return Agent(
            role=" Question answerer",
            backstory=dedent(f"""You are a helpful assistant who can do sentiment analysis based on user question and your name is SIA.You can respond like a real human and good with conversation. You can also ask questions to the user to get more information. """),
            goal=dedent(f"""conversing with the user and answering their questions."""),
            allow_delegation=False,
            verbose=True,
            llm=self.llm70b,
            max_iter =2
        )


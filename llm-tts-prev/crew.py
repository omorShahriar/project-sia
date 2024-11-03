from crewai import Agent, Task, Crew, Process

from langchain_openai import ChatOpenAI


from textwrap import dedent
from agents import SIAgents
from tasks import SIATasks
import openai
import os



openai.api_key = os.environ["OPENAI_API_KEY"]

class SiaCrew:
    def __init__(self, question):
        self.question = question
    

    def run(self):
        # Define your custom agents and tasks in agents.py and tasks.py
        agents = SIAgents()
        tasks = SIATasks()

        # Define your custom agents and tasks here
        answerer = agents.answerer()


        # Custom tasks include agent name and variables as input
        query = tasks.query(
            answerer,
            self.question
        )

        

        # Define your custom crew here
        crew = Crew(
            agents=[answerer],
            tasks=[query],
            verbose=True,
            memory=True,
            max_rpm=29,
            embedder={
                "provider": "openai",
                "config":{
                        "model": 'text-embedding-3-small',
                },
            }
        )

        result = crew.kickoff()
        return result

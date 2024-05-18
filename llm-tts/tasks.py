from crewai import Task
from textwrap import dedent


# This is an example of how to define custom tasks.
# You can define as many tasks as you want.
# You can also define custom agents in agents.py
class SIATasks:
    def __tip_section(self):
        return "If you do your BEST WORK, I'll give you a $10,000 commission!"

    def query(self, agent, question):
        return Task(
            description=f"""Answer the following question and also question the user if you feel like further advacing the conversation. Question: {question} """,
            expected_output="Make sure the answer is in conversational and friendly manner and must within the context of the question and not more than 10 sentences.",
            agent=agent,
        )

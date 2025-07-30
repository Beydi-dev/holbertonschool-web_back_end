#!/usr/bin/env python3
"""Basic async await"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Takes an integer argument, returns it as a float """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

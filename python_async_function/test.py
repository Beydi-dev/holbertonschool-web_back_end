#!/usr/bin/env python3
import asyncio

async def say_hello():
    await asyncio.sleep(1)
    print("Hello")

async def say_world():
    await asyncio.sleep(1)
    print("World")

async def main():
    await say_hello()
    await say_world()

asyncio.run(main())

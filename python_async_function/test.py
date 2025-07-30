#!/usr/bin/env python3
import asyncio

async def attendre():
    print("Je commence à attendre")
    await asyncio.sleep(2)
    print("J’ai fini d’attendre")

async def autre_tache():
    for i in range(4):
        print(f"Autre tâche : {i}")
        await asyncio.sleep(0.5)

async def main():
    # On lance les deux coroutines en parallèle
    await asyncio.gather(attendre(), autre_tache())

asyncio.run(main())

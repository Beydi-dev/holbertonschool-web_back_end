#!/usr/bin/env python3
"""
Task 8. List all documents in Python
"""


def list_all(mongo_collection):
    """
    Funtion to list all documents in a MongoDB collection
    """
    return list(mongo_collection.find())
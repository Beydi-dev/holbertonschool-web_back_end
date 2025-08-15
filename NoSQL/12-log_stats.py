#!/usr/bin/env python3
"""
Task 12. Log stats
"""

from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient()
    collection = client.logs.nginx

    log_count = collection.count_documents({})
    print(f"{log_count} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    get_status_count = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{get_status_count} status check")

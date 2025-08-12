#!/usr/bin/env python3

def index_range(page: int, page_size: int) -> tuple:
    """pagination function that returns a tuple"""

    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)

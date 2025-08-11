#!/usr/bin/env python3

def index_range(page, page_size):
    """pagination function that returns a tuple"""
    if page < 1 or page_size < 1:
        raise ValueError("page et page_size doivent être des entiers positifs")
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)

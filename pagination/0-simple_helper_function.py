#!/usr/bin/env python3
""" 0-simple_helper_function module """

def index_range(page, page_size):
    """pagination function that returns a tuple"""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)

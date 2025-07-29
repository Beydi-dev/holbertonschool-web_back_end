#!/usr/bin/env python3
"""Sum list function"""
from typing import List, Union


def sum_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of floats from a list of ints"""
    return sum(mxd_lst)

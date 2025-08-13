#!/usr/bin/env python3
import csv
import math
from typing import List, Tuple
"""
Simple helper function for pagination
"""

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end indexes for pagination.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        tuple: A tuple containing the start index and end index for slicing.
    """

    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieve a specific page of the dataset.
        
        Args:
        page (int): The page number to return (must be > 0).
        page_size (int): The number of items per page (must be > 0).

        Returns:
        List[List]: A list of rows corresponding to the requested page.
                    Returns an empty list if the page is out of range.
        """
        
        
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        
        start, end = index_range(page, page_size)
        data = self.dataset()
        
        if start >= len(data):
            return []
        
        return data[start:end]

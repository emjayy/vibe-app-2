namespace API.Helpers;

public class PaginationHeader(int currentPage, int itemsPerPage, int TotalItems, int TotalPages)
{
    public int CurrentPage { get; set; } = currentPage;
    public int ItemsPerPage { get; set; } = itemsPerPage;
    public int TotalItems { get; set; } = TotalItems;
    public int TotalPages { get; set; } = TotalPages;
}

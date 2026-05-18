class ApiResponse {
  static ok(res, mess, data = null) {
    return res.status(200).json({
      success: true,
      mess,
      data,
    });
  }

  static created(res, mess, data = null) {
    return res.status(201).json({
      success: true,
      mess,
      data,
    });
  }

  static noContent(res) {
    return res.status(204).send();
  }
}
